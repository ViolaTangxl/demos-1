from pyhanlp import *
import time
import jieba
import jieba.posseg as jp

ClusterAnalyzer = JClass('com.hankcs.hanlp.mining.cluster.ClusterAnalyzer')

if __name__ == '__main__':
  analyzer = ClusterAnalyzer()

  stopwords = []

  with open('./stop-words.txt', 'r') as f:
    stopwords = [word.strip() for word in f.readlines()]
    f.close()

  # 去除停用词
  def remove_stopwords(ls):
    return [word for word in ls if word not in stopwords]

  keywords = []

  # read keywords-all.txt
  with open('./keywords-all.txt', 'r') as f:
    lines = f.readlines()

    for keyword in lines:
      keywords.append(keyword.strip().replace(' ', ''))

    f.close()

  # 处理关键词
  # 将 keyword 推入 analyzer
  for keyword in keywords:
    words = remove_stopwords([w.word for w in jp.cut(keyword)])
    analyzer.addDocument(keyword, ', '.join(words).lower())

  # 重复二分聚类
  result = analyzer.repeatedBisection(1000)

  # 保存分类结果
  for index, wordsList in enumerate(result):
    with open('./aggregated/' + str(index) + '.txt', 'w') as f:
      line = '\n'.join(wordsList)
      f.write(line)

      f.close()
