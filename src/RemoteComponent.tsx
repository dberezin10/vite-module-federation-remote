import {lazy} from "react";
import Counter from '@ippon-tool/gitlab-ci-cd-example/src/components/Counter'

// @ts-ignore
const About = lazy(() => import('hostApp/About'));
const RemoteComponent = () => {

    // console.log('About', About)

  return (
    <div>
        <br/>
        <br/>

        <Counter />
        {/*<About />*/}
        репозиторий remote
    </div>
  )
}

export default RemoteComponent
