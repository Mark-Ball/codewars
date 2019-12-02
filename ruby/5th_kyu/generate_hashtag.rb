def generateHashtag(str)
    result = "#" + str.split.map { |word| word.capitalize }.join
    result.length > 140 || result.length < 1 ? false : result
end