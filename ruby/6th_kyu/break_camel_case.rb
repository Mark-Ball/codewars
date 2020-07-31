def solution(string)
  result = ''
  string.each_char do |c|
    if /[A-Z]/.match(c)
      result += ' '
    end
    result += c
  end
  result
end

# better solution using gsub
def better_solution(string)
  string.gsub(/(?=[A-Z])/, ' ')
end