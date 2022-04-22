const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const { abi, evm } = require("../compile");

let accounts;
let fresher;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  fresher = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Fresher", () => {
  it("deploys a contract", () => {
    console.log(fresher.options.address);
    assert.ok(fresher.options.address);
  });
  it("can get name", async () => {
    const message = await fresher.methods.name().call();
    assert.equal(message, "Nguyen Cao Minh Duc");
  });
  it("can get date of birth", async () => {
    const message = await fresher.methods.dateOfBirth().call();
    assert.equal(message, "21021999");
  });
  it("can say hello", async () => {
    const message = await fresher.methods.sayHello().call();
    assert.equal(message, "Hello");
  });
});
