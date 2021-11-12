from bs4 import BeautifulSoup
import time
import jieba.analyse
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from scipy.linalg import norm

# read html.txt
with open('./html.txt', 'r') as f:
  htmlContent = f.read()
  f.close()

# parse html.txt content
soup = BeautifulSoup(htmlContent, 'html.parser')
curTimeStr = str(int(time.time()))

with open('./parsed-html-' + curTimeStr + '.txt', 'w') as f:
  f.write(soup.prettify())
  f.close()

# get && save text content from parsed html
with open('./content-' + curTimeStr + '.txt', 'w') as f:
  f.write(soup.find('div', id='__next').get_text())
  f.close()

# read text content
with open('./content-' + curTimeStr + '.txt', 'r') as f:
  textContent = f.read()
  f.close()

# analyse
kWords = jieba.analyse.extract_tags(textContent, topK=10, withWeight=True)

with open('./analyse-' + curTimeStr + '.txt', 'w') as f:
  for word, weight in kWords:
    f.write("%s, %.8f\n"%(word, weight))

  f.close()

# TFIDF
tfidf = jieba.analyse.TFIDF()
tfidfKWords = tfidf.extract_tags(textContent, topK=10, withWeight=True)

with open('./tfidf-' + curTimeStr + '.txt', 'w') as f:
  for word, weight in tfidfKWords:
    f.write("%s, %.8f\n"%(word, weight))

  f.close()

# TFIDF 匹配
def tfidf_similarity(s1, s2):
  def add_space(s):
    return ' '.join(list(s))

  # 将字中间加入空格
  s1, s2 = add_space(s1), add_space(s2)
  # 转化为 TF 矩阵
  cv = TfidfVectorizer(tokenizer=lambda s: s.split())
  corpus = [s1, s2]
  vectors = cv.fit_transform(corpus).toarray()
  # 计算 TF 系数
  return np.dot(vectors[0], vectors[1]) / (norm(vectors[0]) * norm(vectors[1]))

# testKWord = '存储' # => 0.30780516221549087
# testKWord = '云存储' # => 0.30353109941767936
# testKWord = '二维表' # => 0.004387265555143877
# testKWord = 'CDN' # => 0.06023887064657665
# testKWord = '存储价格' # => 0.23300859948299607
# testKWord = '中国云存储哪家公司做得好？' # => 0.14891775333849314
testKWord = '中国CDN哪家公司做得好？' # => 0.04250369812521758
print(tfidf_similarity(testKWord, textContent))
