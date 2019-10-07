def narcissistic?(value)
    arr = value.digits
    result = 0
    arr.each { |num| result += num ** arr.length }
    return result
end
p narcissistic?(1634)