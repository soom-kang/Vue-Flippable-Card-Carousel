<template>
	<div
		@click="slideToSelectedCard"
		id="flippable-carousel-flip-card"
		:class="`absolute ${card.selectedStatus[0]} cursor-pointer`"
	>
		<div
			id="flippable-carousel-flip-card-front"
			class="bg-gradient-to-r to-gray-900 from-blue-900 overflow-hidden shadow-2xl absolute card-transition"
		>
			<figure id="flippable-carousel-flip-card-front-image" class="overflow-hidden card-transition">
				<img
					:src="card.frontImage"
					alt="flippable-carousel-flip-card-front-image"
					class="w-full h-full"
				/>
			</figure>
		</div>
		<div
			id="flippable-carousel-flip-card-back"
			class="card-flip-back bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden shadow-2xl card-transition"
		>
			<div class="h-full">
				<div class="h-full flex justify-center items-center">
					<div id="flippable-carousel-flip-card-back-index" class="text-7xl font-bold neon-text">
						{{ `0${cardIndex + 1} FlipCard` }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FlippableCardInfo } from '@/typings';

export default Vue.extend({
	name: 'FlippableCard',

	props: {
		card: {
			type: Object as PropType<FlippableCardInfo>,
			default: null,
		},

		cardIndex: {
			type: Number,
			default: 0,
		},

		slideToSelectedCard: {
			type: Function as PropType<() => void>,
			default: null,
		},
	},
});
</script>

<style lang="scss" scoped>
/* variable */
$card-size: 400px;
$image-size: 400px;
$primary-blue: #08a0f7;

/* mixin */
@mixin cardResizer($arg...) {
	#flippable-carousel-flip-card {
		&-front {
			&-image {
				width: #{nth($arg, 1)};
				height: #{nth($arg, 1)};
			}
		}

		&-front,
		&-back {
			width: #{nth($arg, 2)};
			height: #{nth($arg, 2)};
		}
	}

	@if length($arg) == 3 {
		opacity: #{nth($arg, 3)};
	}
}

@mixin cardPosition($arg...) {
	left: #{nth($arg, 1)};
	transform: translateY(#{nth($arg, 2)}) translateX(#{nth($arg, 3)});
	transition: 1s;

	@if length($arg) == 4 {
		z-index: #{nth($arg, 4)};
	}
}

/* custom style */
.neon-text {
	color: #fff;
	text-shadow: 0 0 7px $primary-blue, 0 0 10px $primary-blue, 0 0 21px $primary-blue,
		0 0 42px $primary-blue;
	animation: flicker 2s infinite alternate;

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			text-shadow: 0 0 4px $primary-blue, 0 0 11px $primary-blue, 0 0 19px $primary-blue,
				0 0 40px $primary-blue;
		}

		20%,
		24%,
		55% {
			text-shadow: none;
		}
	}
}

.card-flip {
	&-front {
		transform: rotateY(180deg);
	}

	&-back {
		transform: rotateY(-180deg);
	}
}

.card-transition {
	transition: 1s;
}

/* styles */
#flippable-carousel-flip-card {
	perspective: 1000px;

	@include cardResizer($image-size, $card-size, 1);

	&-back {
		&-index {
			@apply text-7xl;
			font-family: 'Vibur', cursive;
		}
	}

	&-front,
	&-back {
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	&.selected {
		@include cardPosition(50%, 0px, -50%, 10);
	}

	&.prev {
		@include cardPosition(30%, 0px, -100%, 5);
	}

	&.next {
		@include cardPosition(70%, 0px, -0%, 5);
	}

	&.prev,
	&.next {
		@include cardResizer($image-size * 0.8, $card-size * 0.8);
	}

	&.prev-second {
		@include cardPosition(30%, 0, -100%, -1);
	}

	&.next-second {
		@include cardPosition(70%, 0, -0%, -1);
	}

	&.prev-second,
	&.next-second {
		@include cardResizer($image-size * 0.6, $card-size * 0.6, 0);
	}
}
</style>
