import { Domains } from './domains.type';
import { Module } from 'vuex';
import { RootStore } from '../store.type';

export const domains: Module<Domains, RootStore> = {
  namespaced: true,
  state: {
    frontendOrigin: window.location.origin,
    pathname: window.location.pathname,
    baseUrlFrontend: window.location.origin + window.location.pathname,
    hash: window.location.hash,
    backendOrigin: 'https://strapi.shiatsutherapie78.info',
  },
};
