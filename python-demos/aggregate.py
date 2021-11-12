import time
import jieba.posseg as jp
from gensim import corpora, models

stopwords = []

with open('./stop-words.txt', 'r') as f:
  stopwords = [word.strip() for word in f.readlines()]
  f.close()

# 去除停用词
def remove_stopwords(ls):
  return [word for word in ls if word not in stopwords]

keywords = []

# # read keywords-1000.txt
# with open('./keywords-1000.txt', 'r') as f:
#   lines = f.readlines()
#   for keyword in lines:
#     keywords.append(keyword.strip().replace(' ', ''))
#   f.close()

# read keywords-all.txt
with open('./keywords-all.txt', 'r') as f:
  lines = f.readlines()
  for keyword in lines:
    keywords.append(keyword.strip().replace(' ', ''))
  f.close()

keywords_list = []

for keyword in keywords:
  words = remove_stopwords([w.word for w in jp.cut(keyword)])
  keywords_list.append(words)

# 生成语料词典
dictionary = corpora.Dictionary(keywords_list)

# 生成稀疏向量集
corpus = [dictionary.doc2bow(words) for words in keywords_list]

# LDA 模型，num_topics 设置聚类数，即最终主题的数量
lda = models.ldamodel.LdaModel(corpus=corpus, id2word=dictionary, num_topics=1000)

curTimeStr = str(int(time.time()))

# 保存每个主题的前 5 的词语
with open('./topic-' + curTimeStr + '.txt', 'w') as f:
  for topic in lda.print_topics(num_words=1):
    f.writelines(str(topic))
    f.write('\n')

  f.close()

# 保存 keyword && 主题映射关系
with open('./map-' + curTimeStr + '.txt', 'w') as f:
  for e, values in enumerate(lda.inference(corpus)[0]):
    topic_val = 0
    topic_id = 0

    for tid, val in enumerate(values):
      if val > topic_val:
        topic_val = val
        topic_id = tid

    f.writelines(str(topic_id) + '->' + keywords[e])
    f.write('\n')

  f.close()
