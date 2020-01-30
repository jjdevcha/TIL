# Axios interceptor
You can intercept HTTP responses or requests globally beforn `.then` or `.catch`

```js
componentWillMount() {

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err});
            });
        }

```
