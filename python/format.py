#!/Library/Frameworks/Python.framework/Versions/3.8/bin/python3

import re
import sys

def main():
    file_path = sys.argv[1]
    with open(file_path) as file:
        text = file.read()

    text = re.sub(r'^\s+', "", text)
    text = re.sub(r'\s+', " ", text)
    text = re.sub(r'\s+$', "", text)
    
    i, j = 0, 69

    while j < len(text):
        print(text[i:j])
        i += 69
        j += 69
        
    print(text[i:len(text)])

if __name__ == "__main__":
    main()
