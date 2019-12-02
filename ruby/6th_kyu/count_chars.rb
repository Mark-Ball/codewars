def count_chars(s)
    result = {}
    s.split("").each { |i|
        result[i] == nil ? result[i] = 1 : result[i] += 1
    }
    return result
end
p count_chars("aba")