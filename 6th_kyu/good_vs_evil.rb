def goodVsEvil(good, evil)
    good_values = [1, 2, 3, 3, 4, 10]
    good = good.split
    good_strength = 0

    evil_values = [1, 2, 2, 2, 3, 5, 10]
    evil = evil.split
    evil_strength = 0

    good.each_index { |i| good_strength += good_values[i] * good[i].to_i }

    evil.each_index { |i| evil_strength += evil_values[i] * evil[i].to_i }

    if good_strength > evil_strength
        return "Battle Result: Good triumphs over Evil"
    elsif evil_strength > good_strength
        return "Battle Result: Evil eradicates all trace of Good"
    else
        return "Battle Result: No victor on this battle field"
    end
end