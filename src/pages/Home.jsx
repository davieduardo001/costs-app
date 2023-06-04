import React from 'react'
import Container from '../components/Container'
import savings from '../imgs/savings.svg'
import styles from './Home.module.css'
import LinkButton from '../components/LinkButton'

const Home = () => {
  return (
    <Container customClass="min_height">
      <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo</p>

        <LinkButton to="./newproject" text="Criar Projeto"/>
        <img src={savings} alt="savings" />
      </section>

    </Container>
  )
}

export default Home