const CoffeeToken = artifacts.require('CoffeeToken')

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

function toEther(n){
    return web3.utils.fromWei(n)
}

contract('Buy Me Coffee', ([owner, investor]) => {
    let coffeeToken
  
    before(async () => {
      // Load Contracts
      coffeeToken = await CoffeeToken.new()
    })
  
    describe('Mock CT deployment', async () => {
      it('has a name', async () => {
        const name = await coffeeToken.name()
        assert.equal(name, 'Coffee Token')
      }),

      it('contract has 0 ether balance', async () => {
        const balance = await coffeeToken.balance()
        assert.equal(balance, 0)
      }),

      it('initial coffee token balance', async () => {
        const balance = await coffeeToken.balanceOf(owner)
        assert.equal(toEther(balance.toString()), 1000)
      })
    })

    describe('Buy And Sell', async () => {
        it('check contract ether balance', async () => {
            //Buy coffe
            await coffeeToken.buyCoffee("Test Message",{value : tokens('10')})
        
            const balance = await coffeeToken.balance()
            assert.equal(toEther(balance.toString()), 10)
        }),

        it('check updated coffee token balance', async () => {
            const balance = await coffeeToken.balanceOf(owner)
            assert.equal(toEther(balance.toString()), 1010)
        }),

        it('withdrawl ether', async () => {
            await coffeeToken.withdraw(tokens("5"))
            const balance = await coffeeToken.balance()
            assert.equal(toEther(balance.toString()), 5)
        }),

        it('check updated coffee token balance', async () => {
            const balance = await coffeeToken.balanceOf(owner)
            assert.equal(toEther(balance.toString()), 1005)
        })
      })

})