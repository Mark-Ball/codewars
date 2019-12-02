def convertFracts(lst)
    d = find_d(lst)
    result = []
    for i in lst
        n = (i[0].to_f / i[1] * d)
        result.push([n, d])
    end
    result
end

def find_d(lst)
    denom_list = lst.map { |a| a[1] }
    i = 1
    while true
        divisible = []
        d = denom_list.max * i
        for array in lst
            divisible.push(true) if d % array[1] == 0
            return d if divisible.length == lst.length
        end
        i += 1
    end
end

p convertFracts([[1, 2], [1, 3], [1, 4]])

#pseudocode
#2 loops? 
#1st to compare the max denominator with all the other denominators
#2nd to increment the max denominator

