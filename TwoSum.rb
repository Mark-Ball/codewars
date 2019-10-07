def two_sum(numbers, target)
    l = numbers.length
    for i in 0...l
        next if i == j
        for j in 0...l
            return [i, j] if numbers[i] + numbers[j] == target
        end
    end
end

p two_sum([1, 2, 3, 4, 5, 6, 11, 15], 21)