#The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

# The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

# The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

# A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

# Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

# A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

# A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

def format_duration(seconds)
    return "now" if seconds == 0
    
    sec_in_a_min = 60
    sec_in_a_hour = 3600
    sec_in_a_day = 86400
    sec_in_a_year = 31536000

    result = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    while seconds >= sec_in_a_year
        seconds -= sec_in_a_year
        result[:years] += 1
    end

    while seconds >= sec_in_a_day
        seconds -= sec_in_a_day
        result[:days] += 1
    end

    while seconds >= sec_in_a_hour
        seconds -= sec_in_a_hour
        result[:hours] += 1
    end

    while seconds >= sec_in_a_min
        seconds -= sec_in_a_min
        result[:minutes] += 1
    end

    result[:seconds] += seconds
    
    #initialise the string that will be returned
    str = ""
    #set up the years part of the string
    if result[:years] > 1
        str += "#{result[:years]} years"
    elsif result[:years] == 1
        str += "#{result[:years]} year"
    end
    #append a comma and space if any further text is incoming
    if result[:years] >= 1
        remaining_time = [result[:days], result[:hours], result[:minutes], result[:seconds]].count { |x| x > 0 }

        if remaining_time > 1
            str += ", "
        elsif remaining_time == 1
            str += " and "
        end
    end

    #set up the days part of the string
    if result[:days] > 1
        str += "#{result[:days]} days"
    elsif result[:days] == 1
        str += "#{result[:days]} day"
    end
    #append a comma and space if any further text is incoming
    if result[:days] >= 1
        remaining_time = [result[:hours], result[:minutes], result[:seconds]].count { |x| x > 0 }

        if remaining_time > 1
            str += ", "
        elsif remaining_time == 1
            str += " and "
        end
    end
    #set up the hours part of the string
    if result[:hours] > 1
        str += "#{result[:hours]} hours"
    elsif result[:hours] == 1
        str += "#{result[:hours]} hour"
    end
    #append a comma and space if any further text is incoming
    if result[:hours] >= 1
        remaining_time = [result[:minutes], result[:seconds]].count { |x| x > 0 }

        if remaining_time > 1
            str += ", "
        elsif remaining_time == 1
            str += " and "
        end
    end

    #set up the minutes part of the string
    if result[:minutes] > 1
        str += "#{result[:minutes]} minutes"
    elsif result[:minutes] == 1
        str += "#{result[:minutes]} minute"
    end
    #append a comma and space if any further text is incoming
    if result[:minutes] >= 1
        str += " and " if result[:seconds] > 0
    end
    #set up the minutes part of the string
    if result[:seconds] > 1
        str += "#{result[:seconds]} seconds"
    elsif result[:seconds] == 1
        str += "#{result[:seconds]} second"
    end
    str
end
p format_duration(3600)