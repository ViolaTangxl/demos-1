import time
import jieba.analyse
import jieba.posseg as jp

# TFIDF
stopwords = []

with open('./stop-words.txt', 'r') as f:
  stopwords = [word.strip() for word in f.readlines()]
  f.close()

# 去除停用词
def remove_stopwords(ls):
  return [word for word in ls if word not in stopwords]

tfidf = jieba.analyse.TFIDF()
curTimeStr = str(int(time.time()))

def take_second(elem):
  return elem[1]

with open('./results-' + curTimeStr + '.txt', 'w') as res_f:
  for index in range(1000):
    with open('./aggregated/' + str(index) + '.txt', 'r') as f:
      keywords = []
      lines = f.readlines()

      for keyword in lines:
        # 过滤停词
        # word_without_blank = keyword.strip().replace(' ', '')
        # word_without_stop_word = ''.join(remove_stopwords([w.word for w in jp.cut(word_without_blank)]))
        # keywords.append(word_without_stop_word)

        # 不过滤停词
        word_without_blank = keyword.strip().replace(' ', '')
        keywords.append(word_without_blank)

      content = '。'.join(keywords)
      tfidf_k_words = tfidf.extract_tags(content, topK=10, withWeight=True)

      # 过滤出来权重 >= 1 的关键词
      filtered_k_words = filter(lambda word_item: word_item[1] >= 1, tfidf_k_words)

      first_appear_list = []
      for word, _ in filtered_k_words:
        first_appear_list.append((word, content.find(word)))

      first_appear_list.sort(key=take_second)

      results = []
      length = len(first_appear_list)

      for word_index, word_item in enumerate(first_appear_list):
        if word_index == length - 1:
          results.append(word_item[0])
        else:
          cur_word = word_item[0].replace('.', '')
          next_word = first_appear_list[word_index + 1][0].replace('.', '')

          if cur_word.encode('UTF-8').isalnum() and next_word.encode('UTF-8').isalnum():
            results.append(cur_word + ',')
          else:
            results.append(cur_word)

      res_f.write('关键词 ' + str(index) + '：' + ''.join(results) + '\n')

      f.close()

  res_f.close()
