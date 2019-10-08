# def count_smileys(arr)
#     count = 0
#     arr.each { |smiley|
#         count += 1 if smiley =~ /^[:;][-~]?[)D]$/
#     }
#     return count
# end

#more pro solution
def count_smileys(arr)
    arr.count { |smiley| smiley =~ /^[:;][-~]?[)D]$/ }
end

p count_smileys([':)', ';(', ';}', ':-D'])