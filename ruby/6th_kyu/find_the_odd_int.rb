# def find_it(seq)
#     uniques = seq.uniq
#     for n in uniques
#       if seq.count(n) % 2 == 1
#        return n
#       end
#     end
# end

def find_it(seq)
    seq.select { |n| seq.count(n) % 2 == 1 }
end


p find_it([1,1,1,1,1,1,10,1,1,1,1])