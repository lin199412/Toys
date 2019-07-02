import React from 'react'
import ClassSearch from '../components/ClassSearch/ClassSearch.jsx'
import ClassTabs from '../components/ClassTabs/ClassTabs.jsx'


class Jclassify extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }
    render() {

        return (
            <div>
                <ClassSearch />
                <ClassTabs />
            </div>
        )
    }
}

export default Jclassify