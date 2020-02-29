class Abbreviator
    def self.abbreviate(string)
        arr = string.split(/[- !,.]/)

        for word in arr
            string.gsub!(word, word.length > 3 ? word[0] + (word.length - 2).to_s() + word[-1] : word)
        end
        return string
    end
end

puts Abbreviator.abbreviate("elephant-rides are really fun!")
puts Abbreviator.abbreviate("You, and I, should speak.")