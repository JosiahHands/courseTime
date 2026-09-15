const time = (course: number, time: number): void | string => {
    const times: string =  (time/course).toFixed(2)
    if (time < course) {
        console.log(' ')
        console.log("You're super fast! "+(course/time).toFixed(2)+" times faster than the course")
        console.log('Course time = '+course)
        console.log('Your time = '+time)
        console.log(' ')
    } else if (time >= course && time < course*2) {
        console.log(' ')
        console.log("You're fast! "+times+" times the course")
        console.log('Course time = '+course)
        console.log('Your time = '+time)
        console.log(' ')
    } else if (time >= course*2 && time < course*3) {
        console.log(' ')
        console.log("You're doing good! "+times+" times the course")
        console.log('Course time = '+course)
        console.log('Your time = '+time)
        console.log(' ')
    } else if (time >= course*3 && time < course*4) {
        console.log(' ')
        console.log("You're doing okay. "+times+" times the course")
        console.log('Course time = '+course)
        console.log('Your time = '+time)
        console.log(' ')
    } else if (time > course*4) {
        console.log(' ')
        console.log("You're slow. "+times+" times the course")
        console.log('Course time = '+course)
        console.log('Your time = '+time)
        console.log(' ')
    } else {
        return 'error';
    }
}

// enter the written time of the course and how long it took you (in hours). as in: time(course, you);
time(2.4, 4.75);