import { Domains } from './domains.type';
import { Module } from 'vuex';
import { RootStore } from '../store.type';

export const domains: Module<Domains, RootStore> = {
  namespaced: true,
  state: {
    backendOrigin: 'https://strapi.shiatsutherapie78.info',
    baseUrlFrontend: 'https://shiatsutherapie78.info' + window.location.pathname,
    frontendOrigin: 'https://shiatsutherapie78.info',
    hash: window.location.hash,
    pathname: window.location.pathname,
  },
};
