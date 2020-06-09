import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import Pokeicon from '../../assets/pokemon.svg';

import api from '../../services/api';

import { Container, Form, SubmitButton, PokeInfo } from './styles';

class Main extends Component {
  state = {
    newPoke: '',
    pokeList: {},
    loading: 0,
  };

  handleInputChange = (e) => {
    this.setState({ newPoke: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: 1 });

    const { newPoke } = this.state;

    const response = await api.get(`/pokemon/${newPoke.toLowerCase()}`);

    const data = {
      id: response.data.id,
      name: response.data.name,
      sprite: response.data.sprites.front_default,
    };

    this.setState({
      pokeList: data,
      newPoke: '',
      loading: 0,
    });

    console.log(response.data);
  };

  render() {
    const { newPoke, pokeList, loading } = this.state;
    return (
      <Container className="nes-container is-rounded">
        <h1>
          <img width="32" src={Pokeicon} alt="icone de pokebola" />
          Pokedex
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Procurar Pokemon"
            className="nes-input"
            value={newPoke}
            onChange={this.handleInputChange}
          />
          <SubmitButton className="nes-btn is-primary" loading={loading}>
            {loading ? <FaSpinner color="#ffff" size={20} /> : 'Procurar'}
          </SubmitButton>
        </Form>
        <PokeInfo key={pokeList.id}>
          <div className="left">
            <span>{pokeList.name}</span>
            <span> N.{pokeList.id}</span>
            <div>
              <img src={pokeList.sprite} alt="imagem do pokemon" />
            </div>
          </div>
          <div className="right">
            <ul>
              <li>Teste</li>
            </ul>
          </div>
        </PokeInfo>
      </Container>
    );
  }
}

export default Main;
