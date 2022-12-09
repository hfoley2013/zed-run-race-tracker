const GRAPHQL_API = 'https://zed-ql.zed.run/graphql';

const GET_HORSE_DATA_QUERY = `
query($input: HorseInput) {
	horse(input: $input) {
		name
		nft_id
		img_url
		gen
		bloodline
		breed_type
		color
		inserted_at
		last_breeding_reset
		breeding_counter
		horse_type
		race_statistic {
			first_place_finishes
			second_place_finishes
			third_place_finishes
			number_of_races
			win_rate
		}
    offsprings {
			bloodline
			breed_type
			color
			gen
			horse_type
			nft_id
			race_statistic {
				first_place_finishes
				second_place_finishes
				third_place_finishes
				number_of_races
				win_rate
				positions_per_distance{
					distance
					positions{
						frequency
						position
					}
				}
			}
	  }
  }
}
`;

const GET_RACE_DATA_QUERY = `
query ($input: GetRaceResultsInput, $before: String, $after: String, $first: Int, $last: Int) {
  get_race_results(before: $before, after: $after, first: $first, last: $last, input: $input) {
    edges {
      cursor
      node {
        country
        city
        name
        length
        start_time
        fee
        race_id
        weather
        status
        class
        prize_pool {
          first
          second
          third
					fourth
					fifth
					sixth
					seventh
					eighth
					ninth
					tenth
					eleventh
					twelfth
        }
        horses {
          horse_id
          finish_time
          final_position
          name
          gate
          owner_address
          bloodline
          gender
          breed_type
          gen
          coat
          hex_color
          img_url
          class
          stable_name
        }
      }
    }
    page_info {
      start_cursor
      end_cursor
      has_next_page
      has_previous_page
    }
  }
}
`;

export {GRAPHQL_API, GET_HORSE_DATA_QUERY, GET_RACE_DATA_QUERY};
