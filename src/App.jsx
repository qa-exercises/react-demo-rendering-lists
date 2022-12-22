import React from 'react'
import './style.css'
import TodoItem from './components/TodoItem'

export default function App() {
  return (
    <main>
      <h1>To-do List</h1>
      <ul>
        <TodoItem title="Learn React components" />
        <TodoItem title="Learn React props" />
        <TodoItem title="Learn conditional rendering" />
        <TodoItem title="Learn how to render lists" />
      </ul>
    </main>
  )
}
