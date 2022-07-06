let number = function(busStops){



    let res = busStops.reduce((prev, next) => {
        let res = prev
        res += next[0]
        res -= next[1]

        return res
    }, 0)

   return res
}


let arr = [[10,0],[3,5],[5,8]] //5

let arr1 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] //17


number(arr1)