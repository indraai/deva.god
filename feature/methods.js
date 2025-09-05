export default {
  /**************
  method: god
  params: packet
  describe: The global wall feature that installs with every agent
  ***************/
  async god(packet) {
    const god = await this.methods.sign('god', 'default', packet);
    return god;
  },
};
