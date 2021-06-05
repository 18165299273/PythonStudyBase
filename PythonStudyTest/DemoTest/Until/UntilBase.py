from typing import Type

# str为字符串
# str.isalnum() 所有字符都是数字或者字母
# str.isalpha() 所有字符都是字母
# str.isdigit() 所有字符都是数字
# str.islower() 所有字符都是小写
# str.isupper() 所有字符都是大写
# str.istitle() 所有单词都是首字母大写，像标题
# str.isspace() 所有字符都是空白字符、\t、\n、\r

# 判断是否为数字


def isNumber(param):
    try:
        float(param)
        return True
    except ValueError:
        pass
    try:
        import unicodedata
        unicodedata.numeric(param)
        return True
    except (TypeError, ValueError):
        pass
    return False
