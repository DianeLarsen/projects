import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
    const { issues } = props
  return (
    <div className="todo-list">
        { issues.map(todo => <Issue {...todo} key={issues._id}/>) }
    </div>
  )
}