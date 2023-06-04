import React from 'react'
import Container from '../components/Container'

import styles from './NewProjext.module.css'
import ProjectForm from '../components/Project/ProjectForm'

const NewProject = () => {
  return (
    <Container>
      <div className={styles.newproject_container}>
        <h1>Criar um projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>

        <ProjectForm btnText="Criar Projeto" />
      </div>
    </Container>
  )
}

export default NewProject