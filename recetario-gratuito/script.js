<script>
        function validateForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var terms = document.getElementById('terms').checked;
            
            if (name == "" || email == "" || !terms) {
                alert("Por favor, completa todos los campos y acepta los términos y condiciones.");
                return false;
            }
            return true;
        }

        // Countdown timer
        function startCountdown() {
            var countDownDate = new Date().getTime() + 15 * 60 * 1000; // 15 minutes from now
            var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countdown").innerHTML = "¡OFERTA EXPIRADA!";
                }
            }, 1000);
        }

        window.onload = function() {
            startCountdown();
            
            var modal = document.getElementById("termsModal");
            var link = document.getElementById("termsLink");
            var span = document.getElementsByClassName("close")[0];

            link.onclick = function() {
                modal.style.display = "block";
            }

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    </script>
