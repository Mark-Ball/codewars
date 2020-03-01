def unique_in_order(iterable)
    iterable = iterable.split('') if iterable.class == String

    i = 0
    while i < iterable.length
        if iterable[i] == iterable[i + 1]
            iterable.delete_at(i)
            i -= 1
        end
        i += 1
    end
    iterable
end

unique_in_order('AAAABBBCCDAABBB') # ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         # ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1,2,2,3,3])       # [1,2,3]