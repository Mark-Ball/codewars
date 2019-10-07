def sqInRect(lng, wdth)
    return nil if lng == wdth
    result = []
    while [lng, wdth].min > 0
        result.push([lng, wdth].min)
        if lng > wdth
            lng = lng - wdth
        else
            wdth = wdth - lng
        end   
    end
    return result 
end