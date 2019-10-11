
#my solution
def josephus(items,k)
    result = []
    n = k
    until items.empty?
        indices_to_delete_at = []
        until items[n - 1].nil?
            result.push(items[n - 1])
            indices_to_delete_at.push(n - 1)
            n += k
        end
        n = k - (items.length - (n - k))
        items = delete_from_array(items, indices_to_delete_at)
    end
    result
end

def delete_from_array(arr, del_arr)
    for i in del_arr.reverse
        arr.delete_at(i)
    end
    arr
end

#genius solution from codewars
def josephus_2(items, k)
    Array.new(items.length) { items.rotate!(k).pop }
end