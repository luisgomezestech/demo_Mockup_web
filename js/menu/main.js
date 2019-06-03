
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

/*
	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

		*/

		/*

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		*/

	// Menu de Navegacion
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// Refrencia al link con # + nombre, #punto1, #punto2m etc
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Valor por defecto
					e.preventDefault();

				// Desactiva todos los link
					$nav_a.removeClass('active');

				// Activa el enlace o lo bloquea segun el estado.
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

/*
					if ($section.length < 1)
						return;
*/
				// Scroll
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Desactivar la seccion del panel.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activar panel.
								$section.removeClass('inactive');

							// Activa la seccion señalada.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// o si esta bloqueado, lo desbloquea
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Efecto scroll cuando va a un punto
		$('.scrolly').scrolly();


		// Boton toggle menu para resoluciones de talet y moviles.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Abre el panel del menu
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);