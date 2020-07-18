string = 'test'


def rev():

    string1 = list(string)
    string1.reverse()
    string2 = string1[0::]
    for i in string2:
        stringAll = "" + i
        print(type(stringAll), end='')

rev()
