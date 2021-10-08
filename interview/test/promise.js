class myPromise{
    constructor(call) {
        this.status = 'pedding';
        this.value = null;
        this.error = null;
        this.successArr = [];
        this.errorArr = []

        let resolve = (value) => {
            if (this.status === 'pedding') {
                this.status = 'success';
                this.value = value;
                this.successArr.forEach(fn => fn())
            }
        }

        let reject = (error) => {
            if (this.status === 'pedding') {
                this.status = 'faid';
                this.error = error;
                this.errorArr.forEach(fn => fn())
            }
        }
        call(resolve, reject)
    }
    
    then(success, error) {
        if (this.status === 'faid') {
            success(this.value)
        }

        if (this.status === 'faid') {
            error(this.error)
        }

        if (this.status === 'pedding') {
            this.successArr.push(() => {
                success(this.value)
            })
            this.errorArr.push(() => {
                error(this.error)
            })
        }
    }
}


const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})
test.then(
    (res) => console.log(res),
    (error) => console.log(error)
)
// https://www.cnblogs.com/xinggood/p/11836096.html