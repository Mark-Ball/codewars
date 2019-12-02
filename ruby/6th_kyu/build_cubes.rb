def find_nb(m)
    n = 1
    while true
        m -= n ** 3
        return n if m == 0
        return -1 if m < 0
        n += 1
    end
end