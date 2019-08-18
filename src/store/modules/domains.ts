import { Domains } from './domains.type';
import { Module } from 'vuex';
import { RootStore } from '../store.type';

export const domains: Module<Domains, RootStore> = {
  namespaced: true,
  state: {
    frontendHostname: 'https://hallya.github.io/shiatsu',
    backendHostname: 'https://strapi.lcn-dlc.dev',
  },
};