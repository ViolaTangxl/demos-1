from bs4 import BeautifulSoup
import time
import jieba
import jieba.analyse
import numpy as np
from scipy.linalg import norm
import gensim

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

# Word2Vec 匹配
word2vecModelFile = './sgns.baidubaike.bigram-char'
word2vecModel = gensim.models.KeyedVectors.load_word2vec_format(word2vecModelFile, binary=False, unicode_errors='ignore')

def vector_similarity(s1, s2):
  def sentence_vector(s):
    words = jieba.lcut(s)
    v = np.zeros(300)

    for word in words:
      # word2vecModel 匹配到 word 后再处理
      if word in word2vecModel:
        v += word2vecModel[word]

    v /= len(words)
    return v

  v1, v2 = sentence_vector(s1), sentence_vector(s2)
  return np.dot(v1, v2) / (norm(v1) * norm(v2))

# testKWord = '存储' # => 0.6285647528745009
# testKWord = '云存储' # => 0.6090239892247842
# testKWord = '二维表' # => 0.4201849840432162
# testKWord = 'CDN' # => 0.6372733926406347
# testKWord = '存储价格' # => 0.6868719495347015
# testKWord = '中国云存储哪家公司做得好？' # => 0.7037743779538987
testKWord = '中国CDN哪家公司做得好？' # => 0.6609767302075709
print(vector_similarity(testKWord, textContent))
