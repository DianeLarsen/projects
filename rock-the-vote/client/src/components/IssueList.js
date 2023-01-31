import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
    const { issues } = props
  return (
    <div className="issue-list">
        { issues.map(issue => <Issue {...issue} key={issues._id}/>) }
    </div>
  )
}