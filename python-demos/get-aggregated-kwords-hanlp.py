import os
# 设置 os environ 的内存为 12G
# 否则运行 HanLP 摘要部分代码的时候 jpype._jclass.OutOfMemoryError: Java heap space 错误
os.environ['HANLP_JVM_XMS'] = os.environ['HANLP_JVM_XMX'] = '12g'
from pyhanlp import *
import time

# HanLP 关键词
# TextRankKeyword = JClass("com.hankcs.hanlp.summary.TextRankKeyword")

# if __name__ == '__main__':
#   curTimeStr = str(int(time.time()))

#   with open('./results-' + curTimeStr + '.txt', 'w') as res_f:
#     for index in range(1000):
#       with open('./aggregated/' + str(index) + '.txt', 'r') as f:
#         keywords = []
#         lines = f.readlines()

#         for keyword in lines:
#           keywords.append(keyword.strip().replace(' ', ''))

#         keyword_list = HanLP.extractKeyword('。'.join(keywords), 2)

#         res_f.writelines('关键词 ' + str(index) + '：' + '、'.join(keyword_list) + '\n')

#         f.close()

#     res_f.close()

# HanLP 短语
# if __name__ == '__main__':
#   curTimeStr = str(int(time.time()))

#   with open('./results-' + curTimeStr + '.txt', 'w') as res_f:
#     for index in range(100):
#       with open('./aggregated/' + str(index) + '.txt', 'r') as f:
#         keywords = []
#         lines = f.readlines()

#         for keyword in lines:
#           keywords.append(keyword.strip().replace(' ', ''))

#         phrase_list = HanLP.extractPhrase('。'.join(keywords), 1)

#         res_f.writelines('关键词 ' + str(index) + '：' + ''.join(phrase_list) + '\n')

#         f.close()

#     res_f.close()

# HanLP 摘要
TextRankSentence = JClass("com.hankcs.hanlp.summary.TextRankSentence")

if __name__ == '__main__':
  curTimeStr = str(int(time.time()))

  with open('./results-' + curTimeStr + '.txt', 'w') as res_f:
    for index in range(1000):
      with open('./aggregated/' + str(index) + '.txt', 'r') as f:
        keywords = []
        lines = f.readlines()

        for keyword in lines:
          keywords.append(keyword.strip().replace(' ', ''))

        summary_list = HanLP.extractSummary('。'.join(keywords), 1)

        res_f.writelines('关键词 ' + str(index) + '：' + ''.join(summary_list) + '\n')

        f.close()

    res_f.close()
