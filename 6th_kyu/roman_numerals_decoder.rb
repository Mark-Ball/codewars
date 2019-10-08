def solution(roman)
    arr1 = ["I", "V", "X", "L", "C", "D", "M"]
    arr2 = [1, 5, 10, 50, 100, 500, 1000]
    hash = Hash[arr1.zip(arr2)]

    #figure out what the first cluster of characters are
    #regex to determine if something is a valid cluster?
    # p "XXI" =~ /XX/
    # match = "XXI".match(/XX/)
    # match[0].length

    test_str = "CC"
    #regex for 1000s
    # regex = /^M{1,3}/
    #regex for 100s
    regex = /[C|CD|D?C{0,3}]/
    #regex for 10s
    regex = /[XC|XL|L?X{0,3}]/
    #regex for 1s

    p "The position of the match is: #{test_str =~ regex}"
    "The length of the match is: #{test_str.match(regex)[0].length if test_str.match(regex) != nil}"

end
p solution("XXI")