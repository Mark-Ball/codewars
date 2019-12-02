# A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes.
# We will write a function gap with parameters:
# g (integer >= 2) which indicates the gap we are looking for
# m (integer > 2) which gives the start of the search (m inclusive)
# n (integer >= m) which gives the end of the search (n inclusive)

def prime?(n)
    i = 2
    while i <= Integer.sqrt(n)
        if n % i == 0
            return false
        end
        i += 1
    end
    true
end

def gap(g, m, n)
    arr = []
    i = -1
    while m <= n
        if prime?(m)
            arr.push(m)
            if arr [i] != nil && arr[i + 1] != nil && arr[i + 1] - arr[i] == g
                return [arr[i], arr[i + 1]]
            end
            i += 1
        end
        m += 1
    end
    nil
end