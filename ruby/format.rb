#!/Users/benjamin/.rvm/rubies/ruby-2.6.3/bin/ruby

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
