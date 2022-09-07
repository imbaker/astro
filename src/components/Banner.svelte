<script>
  import { tweened } from 'svelte/motion';
  
  export let date;

  let now = new Date();
  let concertDate = new Date(date);
  let anniversary;
  if (concertDate < now) {
    if ((now.getMonth() > concertDate.getMonth()) || (now.getMonth() === concertDate.getMonth() && now.getDate() >= concertDate.getDate()))
      anniversary = new Date(now.getFullYear(), concertDate.getMonth(), concertDate.getDate());
    else 
      anniversary = new Date(now.getFullYear() - 1, concertDate.getMonth(), concertDate.getDate()); 
  } else {
    anniversary = new Date(now.getFullYear(), concertDate.getMonth(), concertDate.getDate());
  }

  let timer = tweened((now - anniversary)/1000);

  setInterval(() => { $timer++; }, 1000);

  $: years = anniversary.getFullYear() - concertDate.getFullYear();
  $: days = Math.floor($timer / (24 * 3600))
  $: hours = Math.floor(($timer - (days * 24 * 3600)) / 3600).toString().padStart(2,"0");
  $: minutes = Math.floor(($timer - (days * 24 * 3600) - (hours * 3600))/60).toString().padStart(2,"0");
  $: seconds = Math.floor(($timer - (days * 24 * 3600) - (hours * 3600) - (minutes * 60))).toString().padStart(2,"0");
  $: suffix = concertDate > now ? " until next concert" : " since last concert"

</script>

<p>{years} years {days} days {hours} hours {minutes} minutes {seconds}s {suffix}</p>