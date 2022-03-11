let maxHealth = 100;
const ATTACK = 10;
const MATTACK = 14;
const SATTACK =18;
const HEAL = 20;
let currentMonsterHealth = maxHealth;
let currentPlayerHealth = maxHealth
adjustHealthBars(maxHealth);

function endRound() {
    const playerDamage = dealPlayerDamage(MATTACK);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
      alert('You have a draw!');
    }
  }

function attackMonster(mode)
{
    let maxDamage;
    if (mode ==='ATTACK'){
        maxDamage = ATTACK;
    } else if (mode === 'SATTACK') {
        maxDamage = SATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
    }

function attackHandler() {
    attackMonster('ATTACK');
    
    }

function strongattack() {
    attackMonster('SATTACK');

}
function heal(){
    let healValue;
    if (currentPlayerHealth >= maxHealth - HEAL) {
    alert("You can't heal to more than your max initial health.");
    healValue = maxHealth - currentPlayerHealth;
  } else {
    healValue = HEAL;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);  
strongAttackBtn.addEventListener('click', strongattack);
healBtn.addEventListener('click', heal);