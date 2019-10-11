def josephus(items,k)
    result = []
    indices_to_delete_at = []
    n = k
    until items.empty?
        until items[n - 1].nil?
            result.push(items[n - 1])
            indices_to_delete_at.push(n - 1)
            n += k
        end
        n = (items.length % k) + 1
        p "n = #{n}"
        p items = delete_from_array(items, indices_to_delete_at)
    end
    result
end

def delete_from_array(arr, del_arr)
    for i in del_arr.reverse
        arr.delete_at(i)
    end
    arr
end

# p delete_from_array([1, 2, 3, 4, 5, 6, 7], [2, 5])

# [3,6,2,7,5,1,4]
p josephus([1,2,3,4,5,6,7],3)

#what is my pseudocode?
#identify element k, from items, add element to result
#identify element 2*k from items, add element to result
#do this until element x*k is nil
#remove the elements that were added to the result from items
#calculate how much 'left over' there is
#identify the next element to be removed from items