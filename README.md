# 100 Days of New Programming Languages

After learning that Brian Kernighan <a href="https://youtu.be/O9upVbGSBFo?t=3718">rewrites the same program in as many programming languages as possible</a>, I was inspired to try the same thing. The challenge is to take a simple text formatter - one that reads a text file, formats it so that each line is no more than 70 characters, then writes it to StdOut - and rewrite it in as many programming languages as possible until March 16th, 2021, while being employed and having a life 
😂. 

The text file I'll be working with contains a poem, Nemesis, by my favorite author of all time: HP Lovecraft.

I'll be including my review of my experience using the programming language in this README doc and give it a score from 0 - 10, which will also take into account my experience navigating its respective documentation. Please note that these are not judgments of the programming language as a whole; it's moreso a reflection of how well-suited that language is for this particular task, and what my experiences are trying to pick it up as a total noob.

As of today, I'm pretty proficient with four programming languages: Python, Ruby, JavaScript, and Go - so my reviews for those languages in particular will be a little biased as I won't have to go through the pains of learning those languages, nor referring to their documentation. 

I'm particularly excited to get my hands dirty with the more niche programming languages like Haskell, Elixir, and D - so if anyone wants me to review their favorite obscure programming language, write up an issue!

And to fans of Brainfuck, Befunge, and Malbolge: I am not masochistic enough to subject myself to the pains of learning those particular programming languages - sorry lol.

## Python (10/10)

```Python
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
```

Ahhh - my first programming language: You're as beautiful as ever. This simple task is very well-suited for Python. Everything I needed to complete this task comes straight from Python's standard library; and simple tasks such as getting command-line arguments, reading from a file, and slicing into a string are incredibly simple. The `with open as` syntactic embellishment in particular is something I'm a huge fan of, mainly because it eliminates the need for me to manually close files, which is something many of us can tend to do. Overall 10/10 experience.

## Ruby (10/10)

```ruby
def main
  file_path = ARGV[0]
  text = File.open(file_path) { |file| file.read }

  text.gsub! %r{^\s+}, ""
  text.gsub! %r{\s+}, " "
  text.gsub! %r{\s+$}, ""

  i, j = 0, 68

  while j < text.length
    puts text.slice i..j
    i += 69
    j += 69
  end

  puts text.slice i..text.length - 1
end

if __FILE__ == $0
  main
end
```

Ruby is my third programming language, and it's the language the I use professionally. As with many programmers, it is often difficult to say goodbye to your first programming language when your first job requires you to use a different language. When I first learned Ruby, I found myself comparing it to Python incessantly, and hated how it violated so much of what Pythonists consider beautiful; but then I grew up and learned to accept Ruby's quirkiness which allows for so much flexibility and different coding styles, and therefore, different ways of thinking - but I digress.

This task was a breeze with Ruby: no imports needed, dangerous methods (methods with a ! suffix) conveniently eliminate the need to reassign variables, and of course, being able to pass a <a href="https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/">proc</a> - one of my favorite features of Ruby - to `File.open`, which eliminates the need to manually close files is always appreciated. 10/10 experience.

## Javascript (9/10)
```javascript
#!/usr/local/bin/node

const fs = require("fs")

function main() {
    let fileName = process.argv[2]

    var text = fs.readFileSync(fileName, "utf-8") 

    text = text.replace(/^\s+/g, "")
    text = text.replace(/\s+/g, " ")
    text = text.replace(/\s+$/g, "")

    var [i, j] = [0, 69]

    while (j < text.length) {
        console.log(text.slice(i, j))
        i += 69
        j += 69
    }

    console.log(text.slice(i, text.length))
}

if (require.main === module) {
    main()
}
```

JavaScript isn't the language I think of when it comes to scripting, but I was pleasantly surprised with how easy it was to leverage the `fs` file to do a basic file read as well as grab command-line arguments. When it comes to the regex, I'm honestly not a big fan of the /regex/ syntax, nor am I a big fan of having to think of which modifier to append to my regex pattern, but it's a very minor complaint. Additionally, destructuring assignment in JavaScript is a little weird to me, namely having to do `var [a, b] = [1, 2]` rather than simply `var a, b = 1, 2`, but perhaps JavaScript has good reason for doing it this way. Overall though, writing this program with NodeJS was incredibly quick and easy: 9/10.
