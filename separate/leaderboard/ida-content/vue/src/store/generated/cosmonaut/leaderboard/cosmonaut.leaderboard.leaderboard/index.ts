import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { Board } from "./module/types/leaderboard/board"
import { LeaderboardPacketData } from "./module/types/leaderboard/packet"
import { NoData } from "./module/types/leaderboard/packet"
import { IbcTopRankPacketData } from "./module/types/leaderboard/packet"
import { IbcTopRankPacketAck } from "./module/types/leaderboard/packet"
import { PlayerInfo } from "./module/types/leaderboard/player_info"


export { Board, LeaderboardPacketData, NoData, IbcTopRankPacketData, IbcTopRankPacketAck, PlayerInfo };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Board: {},
				BoardAll: {},
				PlayerInfo: {},
				PlayerInfoAll: {},
				
				_Structure: {
						Board: getStructure(Board.fromPartial({})),
						LeaderboardPacketData: getStructure(LeaderboardPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						IbcTopRankPacketData: getStructure(IbcTopRankPacketData.fromPartial({})),
						IbcTopRankPacketAck: getStructure(IbcTopRankPacketAck.fromPartial({})),
						PlayerInfo: getStructure(PlayerInfo.fromPartial({})),
						
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
				getBoard: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Board[JSON.stringify(params)] ?? {}
		},
				getBoardAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BoardAll[JSON.stringify(params)] ?? {}
		},
				getPlayerInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PlayerInfo[JSON.stringify(params)] ?? {}
		},
				getPlayerInfoAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PlayerInfoAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmonaut.leaderboard.leaderboard initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					await dispatch(subscription.action, subscription.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryBoard({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBoard( key.index)).data
				
					
				commit('QUERY', { query: 'Board', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBoard', payload: { options: { all }, params: {...key},query }})
				return getters['getBoard']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryBoard', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBoardAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBoardAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryBoardAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BoardAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBoardAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBoardAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryBoardAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPlayerInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPlayerInfo( key.index)).data
				
					
				commit('QUERY', { query: 'PlayerInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPlayerInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getPlayerInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPlayerInfo', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPlayerInfoAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPlayerInfoAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryPlayerInfoAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PlayerInfoAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPlayerInfoAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPlayerInfoAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPlayerInfoAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSendIbcTopRank({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendIbcTopRank(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendIbcTopRank:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendIbcTopRank:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSendIbcTopRank({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendIbcTopRank(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendIbcTopRank:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendIbcTopRank:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
